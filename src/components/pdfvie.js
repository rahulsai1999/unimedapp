import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PDFView from 'react-native-view-pdf';


const resources = {
  url: 'https://res.cloudinary.com/doweee6jj/image/upload/v1547237127/glwzph0svm1cwfb2ffe0.pdf'
};

export default class pdfvie extends React.Component {
  render() {
    const resourceType = 'url';

    return (
      <View style={{ flex: 1 }}>
        {/* Some Controls to change PDF resource */}
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={resources[resourceType]}
          resourceType={resourceType}
          onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
          onError={() => console.log('Cannot render PDF', error)}
        />
      </View>
    );
  }
}