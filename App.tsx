import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// TODO(Aula 2 — Ex. 3): este componente tem erros propositais de View/Text/StyleSheet
// para você corrigir — ver exercises.md da Aula 2.
// TODO(Aula 2 — Ex. 4 a 7): crie `src/types/pet.ts` com `Pet`, `StatusPasseio`,
// `EspeciePet` e os utility types derivados (Pick/Omit/Partial).
// TODO(Aula 2 — Ex. 6): modele o estado desta tela com `EstadoTela<Pet>`
// (carregando | sucesso | erro) em vez de booleanos soltos.
export default function App() {
  return (
    <View style={styles.container}>
      <Text>App de Gestão e Rotina Pet</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
