import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    width: 350,
    alignSelf:'center'
  },
  title: {
    fontWeight: "bold",
    fontSize: 38,
    marginTop: 30,
    textTransform:'uppercase'
  },
  carList:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap:20,
    padding:5,
  }
});