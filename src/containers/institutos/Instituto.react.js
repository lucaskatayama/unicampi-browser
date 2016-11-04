import React from 'react';
import {connect} from 'react-redux';
import {Content, Header, Title, SubTitle} from 'components/ContentWrapper.react';
import InstitutosActions from 'actions/institutos';
import {Link} from 'react-router';
import Loading from 'components/Loading.react';

const mapStateToProps = (state) => ({
  instituto: state.institutos.instituto,
  pending: state.institutos.pending
})


const mapDispatchToProps = (dispatch) => ({
  get: (sigla) => dispatch(InstitutosActions.get(sigla))
})


class Institutos extends React.Component {

  componentWillMount(){
    this.props.get(this.props.params.sigla)
  }

  render(){
    return (
      <Loading pending={this.props.pending}>
        <Header>
          <Title>{this.props.instituto.sigla}
            <SubTitle>{this.props.instituto.nome}</SubTitle>
          </Title>
        </Header>
        <Content>

        </Content>
      </Loading>
    )
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Institutos);
