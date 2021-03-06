// Tela principal do aplicativo:
//	- Exibição dos alunos
//	- Botão para editar alunos


//Bibliotecas react
import React from 'react';
import {StyleSheet,
		Text,
		View,
		Button,
		ScrollView,
		TextInput,
		KeyboardAvoidingView,
		SafeAreaView,
		TouchableHighlight
		} from 'react-native';

import {gravarAluno} from '../../src/bd';

//Biblioteca Formic usado para preenchimento de dados
import { Formik } from 'formik';

import {validacaoEditor} from './validacao.js'
import * as yup from 'yup'



export default function  DetailsScreen({route,navigation}) {
	const {perfilAluno} = route.params;

	return (
	<KeyboardAvoidingView style={styles.conteiner} behavior="padding">
		<ScrollView>

			<Formik 
				enableReinitialize
				initialValues={perfilAluno} 
				onSubmit={values => {gravarAluno(values);  navigation.popToTop()}}
				validationSchema={validacaoEditor}
			>

			{({ values, handleChange, handleSubmit, isValid,errors,touched}) => (
			<View style={styles.containerForm}>

				<Text style={styles.textInput} >
					Nome do Aluno
				</Text>
				<View style={styles.conteinerTextInput}>
					<TextInput
					placeholder={"Nome Completo"} 
					value={values.Nome}
					onChangeText={handleChange('Nome')}		
					placeholderTextColor="#AAA"
					style={styles.textInput}
					/>
				</View>
				{touched.Nome && errors.Nome &&
				<Text style={styles.textErroForm}>{errors.Nome}</Text>}


				<Text style={styles.textInput} >
					Ano do Colégio
				</Text>
				<View style={styles.conteinerTextInput}>
					<TextInput
					placeholder={"1o ao 9o"} 
					value={values.Ano}
					onChangeText={handleChange('Ano')}		
					placeholderTextColor="#AAA"
					style={styles.textInput}
					/>
				</View>
				{touched.Ano && errors.Ano &&
				<Text style={styles.textErroForm}>{errors.Ano}</Text>}


				<Text style={styles.textInput} >
					Data de Nascimento
				</Text>
				<View style={styles.conteinerTextInput}>
					<TextInput
					placeholder={"DD/MM/AAAA"} 
					value={values.DataNascimento}
					onChangeText={handleChange('DataNascimento')}
					placeholderTextColor="#AAA"
					style={styles.textInput}
					/>
				</View>
				{touched.DataNascimento && errors.DataNascimento &&
				<Text style={styles.textErroForm}>{errors.DataNascimento}</Text>}

				<Text style={styles.textInput} >
					CEP
				</Text>
				<View style={styles.conteinerTextInput}>
					<TextInput
					placeholder={"CEP"} 
					value={values.CEP}
					onChangeText={handleChange('CEP')}
					placeholderTextColor="#AAA"
					style={styles.textInput}
					/>
				</View>
				{touched.CEP && errors.CEP &&
				<Text style={styles.textErroForm}>{errors.CEP}</Text>}

				<Text style={styles.textInput} >
					Rua
				</Text>
				<View style={styles.conteinerTextInput}>
					<TextInput
					placeholder={"Rua"} 
					value={values.Rua}
					onChangeText={handleChange('Rua')}
					placeholderTextColor="#AAA"
					style={styles.textInput}
					/>
				</View>
				{touched.Rua && errors.Rua &&
				<Text style={styles.textErroForm}>{errors.Rua}</Text>}

				<Text style={styles.textInput} >
					Numero
				</Text>
				<View style={styles.conteinerTextInput}>
					<TextInput
					placeholder={"Numero Residencia"} 
					value={values.Numero}
					onChangeText={handleChange('Numero')}
					placeholderTextColor="#AAA"
					style={styles.textInput}
					/>
				</View>
				{touched.Numero && errors.Numero &&
				<Text style={styles.textErroForm}>{errors.Numero}</Text>}

				<Text style={styles.textInput} >
					Complemento
				</Text>
				<View style={styles.conteinerTextInput}>
					<TextInput
					placeholder={"Complemento"} 
					value={values.Complemento}
					onChangeText={handleChange('Complemento')}
					placeholderTextColor="#AAA"
					style={styles.textInput}
					/>
				</View>
				{touched.Complemento && errors.Complemento &&
				<Text style={styles.textErroForm}>{errors.Complemento}</Text>}

				<Text style={styles.textInput} >
					Bairro
				</Text>
				<View style={styles.conteinerTextInput}>
					<TextInput
					placeholder={"Bairro"} 
					value={values.Bairro}
					onChangeText={handleChange('Bairro')}
					placeholderTextColor="#AAA"
					style={styles.textInput}
					/>
				</View>
				{touched.Bairro && errors.Bairro &&
				<Text style={styles.textErroForm}>{errors.Bairro}</Text>}

				<Text style={styles.textInput} >
					Cidade
				</Text>
				<View style={styles.conteinerTextInput}>
					<TextInput
					placeholder={"Cidade"} 
					value={values.Cidade}
					onChangeText={handleChange('Cidade')}
					placeholderTextColor="#AAA"
					style={styles.textInput}
					/>
				</View>
				{touched.Cidade && errors.Cidade &&
				<Text style={styles.textErroForm}>{errors.Cidade}</Text>}

				<Text style={styles.textInput} >
					Estado
				</Text>
				<View style={styles.conteinerTextInput}>
					<TextInput
					placeholder={"Estado"} 
					value={values.Estado}
					onChangeText={handleChange('Estado')}
					placeholderTextColor="#AAA"
					style={styles.textInput}
					/>
				</View>
				{touched.Estado && errors.Estado &&
				<Text style={styles.textErroForm}>{errors.Estado}</Text>}

				<Text style={styles.textInput} >
					Nome Da Mãe
				</Text>
				<View style={styles.conteinerTextInput}>
					<TextInput
					placeholder={"Nome Completo"} 
					value={values.NomeDaMae}
					onChangeText={handleChange('NomeDaMae')}
					placeholderTextColor="#AAA"
					style={styles.textInput}
					/>
				</View>
				{touched.NomeDaMae && errors.NomeDaMae &&
				<Text style={styles.textErroForm}>{errors.NomeDaMae}</Text>}


				<Text style={styles.textInput} >
					CPF Da Mãe
				</Text>
				<View style={styles.conteinerTextInput}>
					<TextInput
					placeholder={"CPF da Mãe"} 
					value={values.CPFdaMae}
					onChangeText={handleChange('CPFdaMae')}
					placeholderTextColor="#AAA"
					style={styles.textInput}
					/>
				</View>
				{touched.CPFdaMae && errors.CPFdaMae &&
				<Text style={styles.textErroForm}>{errors.CPFdaMae}</Text>}


				<Text style={styles.textInput} >
					Data Preferencial de Pagamento
				</Text>
				<View style={styles.conteinerTextInput}>
					<TextInput
					placeholder={"Data Preferencial de Pagamento"} 
					value={values.DataPagamento}
					onChangeText={handleChange('DataPagamento')}
					placeholderTextColor="#AAA"
					style={styles.textInput}
					/>
				</View>
				{touched.DataPagamento && errors.DataPagamento &&
				<Text style={styles.textErroForm}>{errors.DataPagamento}</Text>}

				<View style={{marginTop:30}}>
					<TouchableHighlight 
						style={isValid ? styles.button :  styles.buttonInvalido}
						onPress={handleSubmit}
					>
						<Text style={styles.buttonText}>
							Cadastrar Aluno
						</Text>
					</TouchableHighlight>
				</View>

			</View>)}
			
		</Formik>

	</ScrollView>
	</KeyboardAvoidingView >
	);
}


const styles = StyleSheet.create({
conteiner: {
flex: 1,
backgroundColor: '#EEE',
},
containerForm: {
	paddingHorizontal: 40,
},
conteinerTextInput: {
	height: 40,
	marginTop: 10,
	backgroundColor: 'white',
	paddingHorizontal: 10,
	borderRadius: 5,
	height: 40,
	borderWidth:.2,

	shadowColor: "#000",
	shadowOffset: {
		width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 2.65,
elevation: 6,
},
textInput: {
marginTop:
5,
color: '#000',
fontWeight: 'bold',
},  
textStyle: {
textAlign: 'center',
fontFamily: 'Roboto',
},
largeText: {
fontSize: 44,
},
tinyText: {

fontSize: 11,
textAlign:'left',
},button:{
		height: 40,
		paddingHorizontal: 10,
		alignContent:'center',
		borderRadius: 10,
		justifyContent:'center',
		alignContent:'center',
		backgroundColor:'#00675b',
		marginBottom:36,
		marginHorizontal:36,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 2.65,
		elevation: 6,
	},buttonText:{
		color:'#FFF',
		fontWeight: 'bold',
		fontSize: 16,
		textAlign:'center',
	},
	buttonInvalido:{
	height: 40,
		paddingHorizontal: 10,
		alignContent:'center',
		borderRadius: 10,
		justifyContent:'center',
		alignContent:'center',
		marginBottom:36,
		marginHorizontal:36,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 2.65,
		elevation: 6,
		backgroundColor:'#52c7b8',
	},
	textErroForm:{
		fontSize: 10,
		color: 'red'
	},
});