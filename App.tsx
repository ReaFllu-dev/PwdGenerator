import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
const PasswordSchema = Yup.object().shape(
    {
        passwrdLength: Yup.number().min(4, 'should contain min of 4 char').max(16, 'should contain max of 16 char').required('length is required')
    }
)

export default function App() {
    const [password, setPassword] = useState('')
    const [isPassGenerated, setIsPassGenerated] = useState(false)
    const [lowercase, setLowercase] = useState(true)
    const [uppercase, setUppercase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)

    const generatePassword(password: string, passwrdLength: number) => {
        const characterList = '';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz',
        const numbersDigit = '0123456789',
        const specialChars = '~!@#$%^&*()_+',
        if (uppercase) {
            characterList += uppercaseChars
        }
        if (lowercase) {
            characterList += lowercaseChars
        }
        if (numbers) {
            characterList += numbersDigit
        }
        if (symbols) {
            characterList += specialChars
        }

        const passwordResult = createPassword(characterList, passwrdLength)
        setPassword(passwordResult)
        setIsPassGenerated(true)


    }

    const createPassword(characters: string, passwrdLength: number): string => {
        let result = ''
        for (let i = 0; i < passwrdLength; i++) {
            const charecterIndex = Math.round(Math.random() * characters.length);
            result += characters.charAt(charecterIndex);
        }
        return result
    }

    const resetPassword() => {
        setPassword('')
        setIsPassGenerated(false)
        setUppercase(true)
        setLowercase(false)
        setNumbers(false)
        setSymbols(false)
    }




    return (
        <View>
            <Text>Password Generator</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})