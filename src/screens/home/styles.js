import { StyleSheet } from "react-native";
import { statusColor } from "../../components/card/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header:{
    marginBottom:40
  },
  title: {
    fontWeight: "bold",
    fontSize: 38,
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
  },

  details: {
    borderWidth: 1,
    borderColor: "#444",
    marginVertical: 20,
    height: 100,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  detailsItem: {
    fontSize: 32,
  },

  detailsLabel: {
    fontSize: 24,
    fontWeight: "bold",
    position: "absolute",
    top: -20,
    left: 20,
    backgroundColor: "#fff",
    padding: 5,
  },

  totalNumber: {
    fontSize: 52,
    fontWeight: "900",
    color: statusColor.disponível,
  },
  newExitButton: {
    backgroundColor: "#033",
    width: 70,
    height: 70,
    borderRadius: 50,
    position: "absolute",
    bottom: 40,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
