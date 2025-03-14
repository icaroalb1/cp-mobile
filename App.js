import { StyleSheet, Text, View } from 'react-native';
import { Formulario } from './components/formulario'; 

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.cartao}>
        <Text style={estilos.titulo}>MOBILE CP</Text>
        <Text style={estilos.subtitulo}>Ícaro Americo de Albuquerque Lima - RM555131</Text>
        <Formulario />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAF3', // Cor de fundo mais moderna
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  cartao: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
});
