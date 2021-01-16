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
        {id: 2, title: 'Research', icon: 'https://cdn2.iconfinder.com/data/icons/science-solid-icons-vol-2/48/083-512.png'},
        {id: 3, title: 'Students', icon: 'https://iconarchive.com/download/i89170/icons8/ios7/Users-Student-Filled.ico'},
        {id: 4, title: 'Extracurriculars', icon: 'https://www.jing.fm/clipimg/full/195-1957289_crafts-clipart-co-curricular-activity-extra-curricular-activities.png'},
        {id: 5, title: 'Challenge', icon: 'https://static.thenounproject.com/png/3405816-200.png'},
        {id: 6, title: 'Community', icon: 'https://image.flaticon.com/icons/png/512/14/14598.png'},
        {id: 7, title: 'Berkeley', icon: 'https://i.ebayimg.com/images/g/IVUAAOSwkFZcNZM-/s-l300.png'},
        {id: 8, title: 'Resources', icon: 'https://static.thenounproject.com/png/3031208-200.png'},
        {id: 9, title: 'BioE & Business', icon: 'https://static.thenounproject.com/png/2725688-200.png'},
        {id: 10, title: 'Choosing M.E.T.', icon: 'https://static.thenounproject.com/png/972712-200.png'},
        {id: 11, title: 'Diversity & Social Impact', icon: 'https://static.thenounproject.com/png/1711240-200.png'},
        {id: 12, title: 'Recruiting', icon: 'https://cdn.onlinewebfonts.com/svg/img_115065.png'},
        {id: 13, title: 'Startups', icon: 'https://static.thenounproject.com/png/843013-200.png'},
        {id: 14, title: 'Internships', icon: 'https://static.thenounproject.com/png/516824-200.png'},
        {id: 15, title: 'Small School in World-Class University', icon: 'https://image.flaticon.com/icons/png/512/89/89037.png'},
        {id: 16, title: 'Careers', icon: 'https://static.thenounproject.com/png/305594-200.png'},






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