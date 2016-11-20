import React from 'react';
import { connect } from 'react-redux';
import DisciplinasActions from 'actions/disciplinas';
import Loading from 'components/Loading';
import { Content, Header, Title, SubTitle } from 'components/ContentWrapper';

const mapStateToProps = (state, props) => ({
  sigla: props.params.sigla,
  disciplina: state.disciplinas.disciplina,
  pending: state.disciplinas.pending,
});

const mapDispatchToProps = dispatch => ({
  get: sigla => dispatch(DisciplinasActions.get(sigla)),
});

class Disciplina extends React.Component {

  static propTypes = {
    disciplina: React.PropTypes.shape({
      nome: React.PropTypes.string,
      sigla: React.PropTypes.string,
      créditos: React.PropTypes.number,
      ementa: React.PropTypes.string,
    }),
    sigla: React.PropTypes.string,
    get: React.PropTypes.func,
    pending: React.PropTypes.bool,
  }

  componentWillMount() {
    this.props.get(this.props.sigla);
  }

  render() {
    return (
      <Loading pending={this.props.pending}>
        <Header>
          <Title>
            {this.props.disciplina.sigla}
            <SubTitle>{this.props.disciplina.nome}</SubTitle>
          </Title>
        </Header>
        <Content>
          <p>Créditos: {this.props.disciplina.créditos}</p>
          <p>{this.props.disciplina.ementa}</p>
        </Content>
      </Loading>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Disciplina);
