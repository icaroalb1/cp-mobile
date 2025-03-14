import { StyleSheet, Text, TextInput, View } from "react-native"

interface EntradaProps {
    tipo: 'default' | 'number-pad'
    placeholder: string
    rotulo?: string
    valor?: string
    aoMudarTexto?: (texto: string) => void
    estiloCustomizado?: object // Permite passar estilos personalizados
}

export function Entrada({ rotulo, placeholder, tipo, valor, aoMudarTexto, estiloCustomizado }: EntradaProps) {
    return (
        <View style={[estilos.containerEntrada, estiloCustomizado]}>
            {rotulo && (
                <Text style={estilos.rotulo}>{rotulo}</Text>
            )}
            <TextInput 
                style={estilos.entrada} 
                keyboardType={tipo} 
                placeholder={placeholder} 
                placeholderTextColor={'#666'} 
                value={valor} 
                onChangeText={aoMudarTexto} 
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    containerEntrada: {
        width: '100%',
        gap: 5
    },
    rotulo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#444'
    },
    entrada: {
        width: '100%',
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff'
    }
});
