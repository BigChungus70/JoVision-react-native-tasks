import { Button, Text, View } from "react-native";

import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import ClassComponent40 from "../Components/ClassComponent40";

export default function Task40() {
  const [mount, setMount] = useState(false);
  const [btnTxt, setBtnTxt] = useState("Show");
  function toggle() {
    setMount(!mount);
    setBtnTxt(btnTxt === "Show" ? "Hide" : "Show");
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 10 }}>
      <Provider store={store}>
     {mount && <ClassComponent40/>}
      <Button
        title={btnTxt}
        onPress={toggle}
      />
      </Provider>
    </View>
  );
}