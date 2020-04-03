import React, { Component } from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";
import "./style.css";
import Axios from "axios";
import Loading from "../../components/Loading";
import { Redirect } from "react-router-dom";
import FoundedData from "../../components/Dashboard/FoundedData";
import { Bar } from "react-chartjs-2";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
      data: [],
      isLoading: true,
      messageLoading: "Preparando o terreno",
    };
  }

  async handleRequest() {
    if (this.props.list.length === 0) return;
    this.setState({
      data: this.state.data,
      isLoading: true,
      messageLoading: "Preparando o terreno",
    });
    const request = Axios.create();
    try {
      for (let i = 0; i < this.props.list.length; i++) {
        this.setState({
          data: this.state.data,
          isLoading: true,
          messageLoading: `Requerindo ${this.props.list[i].city} ${i + 1}/${
            this.props.list.length
          }`,
        });
        const response = await request.get(
          `http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=202001&codigoIbge=${this.props.list[i].id}&pagina=1`
        );

        this.setState({
          data: [...this.state.data, ...response.data],
          messageLoading: `Sucesso para ${response.data.id}`,
          isLoading: true,
        });
      }
    } catch (error) {
      console.error("ERROR WHILE SEND REQUEST", error);
    } finally {

      this.setState({
        data: this.state.data,
        messageLoading: `Finalizando processamento`,
        isLoading: true,
      });
      setTimeout(() => {
        this.setState({ data: this.state.data, isLoading: false });
      }, 2000);

      console.log("End request", this.state);
    }
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  GenerateChart = () => {
    const valuePerCity = this.state.data.map((x) => ({
      value: x.valor,
      city: x.municipio.nomeIBGE,
      benefited: x.quantidadeBeneficiados,
      backgroundColor: "rgb(65, 105, 225, 0.6)",
    }));
    console.log("VALUE PER CITY", valuePerCity);

    const data = {
      labels: valuePerCity.map((x) => `${x.city} (${x.benefited})`),
      datasets: [
        {
          label: "Valor R$",
          data: valuePerCity.map((x) => x.value),
          backgroundColor: valuePerCity.map((x) => x.backgroundColor),
        },
      ],
    };

    return (
      <Bar
        options={{
          title: {
            display: true,
            text: "Valor do bolsa família distribuído por cidade",
          },
        }}
        width="600px"
        height="400px"
        ref={this.chartReference}
        data={data}
      />
    );
  };

  async componentDidMount() {
    await this.handleRequest();
  }

  render() {
    return (
      <>
        {this.props.list.length === 0 ? <Redirect to="/" /> : null}

        <Header />

        <div className="ContentDashboard">
          {this.state.isLoading ? (
            <Loading message={this.state.messageLoading} />
          ) : null}

          <div className="data">
            <FoundedData list={this.state.data} />
          </div>

          <div className="dash">
            <div>
              <this.GenerateChart />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.IBGE.list.filter((x) => x.checked),
});

export default connect(mapStateToProps)(Dashboard);
