import { View, Image, FlatList } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";

import { Heading } from "../../components/Heading";

import { GAMES } from "../../utils/games";
import { styles } from "./styles";

export function Home() {
  return <View style={styles.container}></View>;
}
