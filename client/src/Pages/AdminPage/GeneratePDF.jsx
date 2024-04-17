import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 10,
  },
  productItem: {
    marginLeft: 10,
  },
  productName: {
    fontWeight: 'bold',
  },
});

const GeneratePDF = ({ order }) => {
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.header}>Order Details - Hakim Livs </Text>
          <View style={styles.section}>
            <Text>Order ID: {order._id}</Text>
            <Text>Namn: {order.fullName}</Text>
            <Text>Adress: {order.address}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>Plocklista:</Text>
            {order.products.map((product, index) => (
              <View key={index} style={styles.productItem}>
                <Text style={styles.productName}>{index + 1}. {product.name}</Text>
                <Text>Antal: {product.amount}</Text>
              </View>
            ))}
          </View>
          <Text>Status: {order.status}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <PDFDownloadLink document={<MyDocument />} fileName={`${order._id}.pdf`}>
      {({ loading }) => (
        <button disabled={loading}>{loading ? 'Loading...' : 'PDF'}</button>
      )}
    </PDFDownloadLink>
  );
};

export default GeneratePDF;
