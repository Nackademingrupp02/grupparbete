import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 12,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  section: {
    fontSize: 10,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#bfbfbf',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    fontSize: 13
  },
  headerCell: {
    fontWeight: 'bold',
  },
  contactSection: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 14
  },
  copyright: {
    marginTop: 20,
    textAlign: 'center',
  },
});


const GeneratePDF = ({ order }) => {
  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZone: 'Europe/Stockholm',
    };
    return new Date(date).toLocaleString('en-US', options);
  };
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.header}>Order Detaljer - Hakim Livs </Text>
          <View style={styles.section}>
            <Text>Order ID: {order._id}</Text>
            <Text>Orderdatum: {formatDate(order.createdAt)} </Text>
            <Text>Namn: {order.fullName}</Text>
            <Text>Adress: {order.address}</Text>
            <Text>Telefon: 0{order.phone}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>Plocklista:</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text style={styles.headerCell}>Produkt</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.headerCell}>Antal</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.headerCell}>Pris</Text>
                </View>
              </View>
              {order.products.map((product, index) => (
                <View key={index} style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text>{product.name}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>{product.amount} st</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>{(product.amount * product.price).toFixed(2)} kr</Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={styles.tableCell}>
            <Text>Totalt: {order.price.toFixed(2)} kr</Text>
            </View>
          </View>
          <View style={styles.tableCell}>
          <Text>Status: {order.status}</Text>
          </View>
          <View style={styles.contactSection}>
            <Text>Kontaktuppgifter Hakim:</Text>
            <Text>Telefonnummer: +46 8 154 355 76</Text>
            <Text>Email: Hakim_livs@gmail.com</Text>
            <Text>Adress: Importörvägen 22, 120 44 Årsta</Text>
          </View>
          <View style={styles.contactSection}>
            <Text>
              Levereras till dörren och betalas i efterhand med Swish/kontant vid leverans.
            </Text>
            <Text>
              Swish till: +46 8 154 35576
            </Text>
            </View>
          <Text style={styles.copyright}>Hakim Livs - 2024</Text>
        </View>
      </Page>
    </Document>
  );
  
  

  return (
    <PDFDownloadLink document={<MyDocument />} fileName={`${order._id}.pdf`}>
      {({ loading }) => (
        <button disabled={loading}>{loading ? 'Laddar...' : 'Faktura'}</button>
      )}
    </PDFDownloadLink>
  );
};

export default GeneratePDF;


