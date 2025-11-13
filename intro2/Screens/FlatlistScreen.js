import { Text, StyleSheet, View, SectionList } from 'react-native';

export default function FlatlistScreen() {
  const DATA = [
    {
      title: 'Frutas',
      data: ['Manzana', 'Banana', 'Naranja'],
    },
    {
      title: 'Verduras',
      data: ['Lechuga', 'Zanahoria', 'Tomate'],
    },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        ListHeaderComponent={() => (
          <Text style={styles.listHeader}>Lista de Alimentos</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.listFooter}>Fin de la lista</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  listHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  item: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 20,
  },
  listFooter: {
    textAlign: 'center',
    padding: 15,
    fontStyle: 'italic',
  },
});
