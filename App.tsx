import { SafeAreaView, Text, View } from "react-native";
import colors from "./src/theme/colors";
import fonts from "./src/theme/fonts";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text style={{ color: colors.primary, fontSize: fonts.size.lg}}>Hello World!</Text>
    </SafeAreaView>
  );
};

export default App;
