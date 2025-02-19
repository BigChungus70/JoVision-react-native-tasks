import { Button, Text, View } from "react-native";
import FunctionalComponent39 from "../Components/FunctionalComponent39";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../Redux/store";

export default function Task39() {
  const [mount, setMount] = useState(false);
  const [btnTxt, setBtnTxt] = useState("Show");
  function toggle() {
    setMount(!mount);
    setBtnTxt(btnTxt === "Show" ? "Hide" : "Show");
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 10 }}>
      <Provider store={store}>
     {mount && <FunctionalComponent39 />}
      <Button
        title={btnTxt}
        onPress={toggle}
      />
      </Provider>
    </View>
  );
}