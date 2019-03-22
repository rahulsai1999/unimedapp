import React, { Component } from "react";
import { View, Spinner, Container, Header, Content, Accordion, Card, CardItem, Text, Body } from "native-base";

export default class Medicine extends Component {
  constructor()
  {
    super();
    this.state={
      isLoading:true,
      medData:{}
    }
  }

  componentDidMount()
  {
    fetch('https://visionapu.herokuapp.com/medicine/search/'+this.props.uri,{
    method:'get',})
    .then(response=>response.json())
    .then((response) =>
      {
       console.log(response);
       this.setState({
         isLoading:false,
         medData:response
        })
      })
  }

  renderDataorSpinner(){
    
    if(this.state.isLoading)
    {
      return(
        <View>
          <Spinner/>
        </View>
      ) 
    }

    else{
    const dataArray=[
      {title:"Schedule",content:this.state.medData.sched},
      {title:"Constituent",content:this.state.medData.constit},
      {title:"How it Works",content:this.state.medData.work},
      {title:"Used for",content:this.state.medData.usedfor},
      {title:"Side Effects",content:this.state.medData.sidef}];
    
    return(
      <View>
      <Card>
        <CardItem header bordered>
          <Text>{this.state.medData.name}</Text>
        </CardItem>
        <CardItem bordered>
          <Text>{this.state.medData.manuf}</Text>
        </CardItem>
        <CardItem bordered>
          <Text>Rs. {this.state.medData.price}</Text>
        </CardItem>
        <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
        />
      </Card>
      </View>
    );
    }
  }

  render() {
    return (
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Medicine Info</Text></Header>
        <Content padder>
        {this.renderDataorSpinner()}
        </Content>
      </Container>
    );
  }
}