

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { Container, Header, Title, Button, Icon, Content, Badge, Card, CardItem,  Thumbnail, InputGroup, Input } from 'native-base';
var dicData = require('./mala.json');
console.log(dicData);
export default class MalayalamDictionary extends Component {
	constructor(props) {
    super(props);
    this.state = {input: '',
        output: ''};
    var _this=this;
}
  showMeaning = () => {
    // Use the ternary operator to check if the word 
    // exists in the dictionary.
    var meaning = "Not found";
    for (x in dicData) {
    	 if(this.state.input.toUpperCase() === dicData[x].english_word.toUpperCase()){
    	 	 meaning = dicData[x].malayalam_definition;
    	 }
	}

    this.setState({
         output: meaning 
    });
}
  render() {
    return (
    	<Container>
            <Header>
                <Button transparent>
                    <Icon name='ios-arrow-back' />
                </Button>
                
                <Title>Header</Title>
                
                <Button transparent>
                    <Icon name='ios-menu' />
                </Button>
            </Header>
            <Content>
            	<Card>
                    <CardItem >
		                <Text>
				        	Type something in English:
				    	</Text>
				    	<TextInput text = { this.state.input } onChangeText={(e) => this.setState({input: e})} onSubmitEditing = { this.showMeaning }/>
				    	<Button onPress={ this.showMeaning } > Find <Icon name='ios-search' /></Button>
                    </CardItem>
                    <CardItem >
		               	<Text style = { styles.germanLabel } >
				            Its malayalam equivalent is:
				        </Text>

				        <Text style = { styles.malWord } >    
				        { this.state.output }            
				        </Text>
                    </CardItem>
               </Card>
            </Content>

        </Container>
    );
  }
}

var styles = StyleSheet.create({
 
    // For the container View
    parent: {
        padding: 16
    },
 
    // For the Text label
    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },
 
    // For the Text meaning
    malWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    }
});

AppRegistry.registerComponent('MalayalamDictionary', () => MalayalamDictionary);
