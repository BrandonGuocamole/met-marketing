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
        {id: 2, title: 'Research', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 3, title: 'Students', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 4, title: 'Extracurriculars', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 5, title: 'Challenge', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 6, title: 'Community', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 7, title: 'Berkeley', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 8, title: 'Resources', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 9, title: 'BioE & Business', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 10, title: 'Choosing M.E.T.', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 11, title: 'Diversity', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 12, title: 'Recruiting', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 13, title: 'Startups', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 14, title: 'Internships', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 15, title: 'Small School in World-Class University', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},
        {id: 16, title: 'Careers', icon: 'https://www.flaticon.com/svg/static/icons/svg/61/61514.svg'},






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