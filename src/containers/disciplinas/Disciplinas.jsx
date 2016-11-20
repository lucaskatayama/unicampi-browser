import React from 'react';
import { connect } from 'react-redux';
import DisciplinasActions from 'actions/disciplinas';
import { Link } from 'react-router';
import Loading from 'components/Loading';


const Disciplina = props => (
  <tr>
    <td><Link to={`/disciplina/${props.sigla}`}>{props.sigla}</Link></td>
    <td><Link to={`/disciplina/${props.sigla}`}>{props.nome}</Link></td>
  </tr>
);

Disciplina.propTypes = {
  sigla: React.PropTypes.string,
  nome: React.PropTypes.string,
};

const mapStateToProps = state => ({
  disciplinas: state.disciplinas.disciplinas,
  pending: state.disciplinas.pending,
});

const mapDispatchToProps = dispatch => ({
  list: sigla => dispatch(DisciplinasActions.list(sigla)),
});

class Disciplinas extends React.Component {
  static propTypes = {
    sigla: React.PropTypes.string,
    list: React.PropTypes.func,
    disciplinas: React.PropTypes.arrayOf(React.PropTypes.object),
    pending: React.PropTypes.bool,
  };

  componentWillMount() {
    this.props.list(this.props.sigla);
  }

  render() {
    return (
      <div className="box">
        <div className="box-body no-padding">
          <Loading pending={this.props.pending}>
            <table className="table table-hover">
              <tbody>
                <tr>
                  <th>Sigla</th>
                  <th>Nome</th>
                </tr>
                { this.props.disciplinas.map(d => <Disciplina key={d.sigla} {...d} />) }
              </tbody>
            </table>
          </Loading>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Disciplinas);
