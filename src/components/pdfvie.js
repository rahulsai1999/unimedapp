import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PDFView from 'react-native-view-pdf';


export default class pdfvie extends React.Component {
  render() {
    const resourceType = 'url';

    return (
      <View style={{ flex: 1 }}>
        {/* Some Controls to change PDF resource */}
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={this.props.url}
          resourceType={resourceType}
          onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
          onError={() => console.log('Cannot render PDF', error)}
        />
      </View>
    );
  }
}