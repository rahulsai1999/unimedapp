import React, { Component } from "react";
import { Container, Header, Content, Accordion, Card, CardItem, Text, Body } from "native-base";

const dataArray = [
  { title: "Used For", content: "Crocin 100mg drop is used in the treatment of headache, joint pain, dental pain, nerve pain, muscular pain, menstrual pain, migraine and fever" },  
  { title: "Side Effects", content: "Skin redness, Allergic reaction, Shortness of breath, Running nose, Nausea, Liver injury, Abnormal blood cell count, Facial swelling, Blisters on skin" },
  { title: "Pregnancy", content: "Research studies with animals found harmful effects on unborn babies. It hasn't been properly studied in humans." }
];
export default class Medicine extends Component {
  render() {
    return (
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Medicine Info</Text></Header>
        <Content padder>
            <Card>
            <CardItem header bordered>
              <Text>Crocin 100mg</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Cipla Pharmaceuticals Ltd.</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Rs. 9.81</Text>
            </CardItem>
            <Accordion
                dataArray={dataArray}
                headerStyle={{ backgroundColor: "#b7daf8" }}
                contentStyle={{ backgroundColor: "#ddecf8" }}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}