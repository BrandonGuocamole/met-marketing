import React from 'react'
import QuestionButton from './QuestionButton.js'
import {
    Flex,
    Center,
} from '@chakra-ui/react'

function Questions () {
    // Currently the same button is repeated multiple times. 
    // To implement the video feature, a link to a folder containing all the videos for each question will probably need to be included in the JSON object defined below.
    // Currently this is set up to take in as many questions as needed. The question boxes are of a fixed sized but will rearrange to fit multiple layouts because of a flex component.

    const questionList = [
        {id: 1, title: 'Dual Degree', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 2, title: 'Research', icon: 'https://www.flaticon.com/svg/vstatic/svg/3915/3915535.svg?token=exp=1610653124~hmac=ca3e53851f8c6e7edbc26295df3872a1'},
        {id: 3, title: 'Students', icon: 'https://www.flaticon.com/svg/vstatic/svg/535/535572.svg?token=exp=1610653276~hmac=190a4746524f283bb2cf168ed6fd5662'},
        {id: 4, title: 'Extracurriculars', icon: 'https://www.flaticon.com/svg/vstatic/svg/2445/2445595.svg?token=exp=1610653362~hmac=fbc215d67efee551785d9c6c7cf897e1'},
        {id: 5, title: 'Challenge', icon: 'https://www.flaticon.com/svg/vstatic/svg/2726/2726760.svg?token=exp=1610653400~hmac=d318ba7a25008240f35c8346bdff1028'},
        {id: 6, title: 'Community', icon: 'https://www.flaticon.com/svg/vstatic/svg/14/14598.svg?token=exp=1610653435~hmac=01f2ef51237c9919cfb89930fc8abcc0'},
        {id: 7, title: 'Berkeley', icon: 'https://i.ebayimg.com/images/g/IVUAAOSwkFZcNZM-/s-l300.png'},
        {id: 8, title: 'Resources', icon: 'https://www.flaticon.com/svg/vstatic/svg/686/686348.svg?token=exp=1610653536~hmac=5b9ba2a4c5604e6fcf70d0983bf827b9'},
        {id: 9, title: 'BioE & Business', icon: 'https://www.flaticon.com/svg/vstatic/svg/3035/3035491.svg?token=exp=1610653652~hmac=9ad2c44bd9455f2e07624cf043bd4ec6'},
        {id: 10, title: 'Choosing M.E.T.', icon: 'https://www.flaticon.com/svg/vstatic/svg/2780/2780188.svg?token=exp=1610653681~hmac=08a0149112ca597e4cc034af7c15282e'},
        {id: 11, title: 'Diversity & Social Impact', icon: 'https://www.flaticon.com/svg/vstatic/svg/3090/3090450.svg?token=exp=1610653726~hmac=fc7cdf19d637fc4c45cfad6fcbc91f3f'},
        {id: 12, title: 'Recruiting', icon: 'https://www.flaticon.com/svg/vstatic/svg/3442/3442245.svg?token=exp=1610653775~hmac=e6f0998d52f29e79eadcbd83fb6befe1'},
        {id: 13, title: 'Startups', icon: 'https://www.flaticon.com/svg/vstatic/svg/2285/2285551.svg?token=exp=1610653876~hmac=586104940deabee5a9eab5d0df5e9184'},
        {id: 14, title: 'Internships', icon: 'https://www.flaticon.com/svg/vstatic/svg/1945/1945648.svg?token=exp=1610653896~hmac=711fe8d26dd12b1bafeb1f17006f9f9d'},
        {id: 15, title: 'Small School in World-Class University', icon: 'https://www.flaticon.com/svg/vstatic/svg/2231/2231549.svg?token=exp=1610653931~hmac=a92288ab8733a47a12c722632f4485f3'},
        {id: 16, title: 'Careers', icon: 'https://www.flaticon.com/svg/vstatic/svg/2618/2618523.svg?token=exp=1610653989~hmac=0a9ec399ea24afdcb8c744c8f80010d5'},






    ]

    const questionButtons = questionList.map((buttonInfo) =>
        <QuestionButton key={buttonInfo.id} title={buttonInfo.title} icon={buttonInfo.icon}/>
    )

    return (
        <Center>
            <Flex
                flexWrap='wrap'
                w='90%'
                justifyContent='center'
            >
                {questionButtons}
            </Flex>
        </Center>
    )

}

export default Questions