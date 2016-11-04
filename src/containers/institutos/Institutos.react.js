import React from 'react';
import {connect} from 'react-redux';
import {Content, Header, Title, SubTitle} from 'components/ContentWrapper.react';
import InstitutosActions from 'actions/institutos';
import {Link} from 'react-router';
import Loading from 'components/Loading.react';

const Instituto = (props) => (
  <tr>
    <td><Link to={'/institutos/'+ props.sigla}>{props.nome}</Link></td>
    <td><Link to={'/institutos/'+ props.sigla}>{props.sigla}</Link></td>
  </tr>
)


Instituto.propTypes = {
  sigla: React.PropTypes.string,
  nome: React.PropTypes.string
}



const mapStateToProps = (state) => ({
  institutos: state.institutos.institutos,
  pending: state.institutos.pending
})


const mapDispatchToProps = (dispatch) => ({
  list: () => dispatch(InstitutosActions.list())
})


class Institutos extends React.Component {
  static propTypes = {
    sigla: React.PropTypes.string,
    list: React.PropTypes.func,
    pending: React.PropTypes.bool,
    institutos: React.PropTypes.array
  }

  componentWillMount(){
    this.props.list()
  }

  render(){
    return (
      <Loading pending={this.props.pending}>
        <Header>
          <Title>Institutos
            <SubTitle>Acesso às informações dos Institutos</SubTitle>
          </Title>
        </Header>
        <Content>
          <div className="box">
            <div className="box-body no-padding">
              <table className='table table-hover'>
                <tbody>
                  <tr>
                    <th>Nome</th>
                    <th>Sigla</th>
                  </tr>

                  {
                    this.props.institutos.map((i, idx) => (
                      <Instituto key={idx} {...i} />))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </Content>
          </Loading>
        )
      }
    }




    export default connect(mapStateToProps, mapDispatchToProps)(Institutos);
