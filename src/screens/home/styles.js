import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignSelf:'center',
    gap: 30,
    width: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 38,
    marginTop: 30,
  },
  carList:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap:20,
    padding:5,
  }
});