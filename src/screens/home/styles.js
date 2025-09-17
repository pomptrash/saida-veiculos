import { StyleSheet } from "react-native";
import { statusColor } from "../../components/card/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  header: {
    marginBottom: 40,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 38,
  },

  text: {
    fontSize: 32,
    fontWeight: "bold",
  },

  detailsOutterBorder: {
    borderWidth: 1,
    borderColor: "#071",
    marginBottom: 50,
  },
  details: {
    borderWidth: 1,
    borderColor: "#071",
    backgroundColor: "#eee",
    margin: 2,
    height: 170,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  detailsItem: {
    fontSize: 32,
  },

  detailsLabel: {
    color: "#071",
    textShadowOffset: 1,
    textShadowRadius: 2,
    textShadowColor: "#000",
    fontSize: 32,
    fontWeight: "bold",
    position: "absolute",
    top: -28,
    left: 20,
    backgroundColor: "#eee",
    padding: 5,
  },

  totalAvailable: {
    fontSize: 80,
    fontWeight: "900",
    color: statusColor.disponível,
  },
  totalInUse: {
    fontSize: 80,
    fontWeight: "900",
    color: statusColor["em uso"],
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
