import React from 'react';
import { connect } from 'react-redux';
import { Content, Header, Title, SubTitle } from 'components/ContentWrapper';
import InstitutosActions from 'actions/institutos';
import Loading from 'components/Loading';
import Disciplinas from 'containers/disciplinas/Disciplinas';

const mapStateToProps = state => ({
  instituto: state.institutos.instituto,
  pending: state.institutos.pending,
});

const mapDispatchToProps = dispatch => ({
  get: sigla => dispatch(InstitutosActions.get(sigla)),
});

class Institutos extends React.Component {
  static propTypes = {
    get: React.PropTypes.func,
    params: React.PropTypes.shape({
      sigla: React.PropTypes.string,
    }),
    pending: React.PropTypes.bool,
    instituto: React.PropTypes.shape({
      sigla: React.PropTypes.string,
      nome: React.PropTypes.string,
    }),
  };

  componentWillMount() {
    this.props.get(this.props.params.sigla);
  }

  render() {
    return (
      <Loading pending={this.props.pending}>
        <Header>
          <Title>{this.props.instituto.sigla}
            <SubTitle>{this.props.instituto.nome}</SubTitle>
          </Title>
        </Header>
        <Content>
          <Disciplinas sigla={this.props.params.sigla} />
        </Content>
      </Loading>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Institutos);
