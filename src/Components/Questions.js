import React from 'react'
import QuestionButton from './QuestionButton.js'
import {
    Flex,
    Center,
    Box,
} from '@chakra-ui/react'

function Questions (props) {
    // Currently the same button is repeated multiple times. 
    // To implement the video feature, a link to a folder containing all the videos for each question will probably need to be included in the JSON object defined below.
    // Currently this is set up to take in as many questions as needed. The question boxes are of a fixed sized but will rearrange to fit multiple layouts because of a flex component.

    const questionList = [
        {id: 1, title: 'Two Degrees in Four Years', icon: 'https://i.imgur.com/OgglPvX.png'},
        {id: 2, title: 'Research', source: 'https://www.youtube.com/embed/eqYmOqY2mIE', icon: 'https://cdn2.iconfinder.com/data/icons/science-solid-icons-vol-2/48/083-512.png'},
        {id: 3, title: 'Students', source: 'https://www.youtube.com/embed/wutiE65RsXk', icon: 'https://iconarchive.com/download/i89170/icons8/ios7/Users-Student-Filled.ico'},
        {id: 4, title: 'Extracurriculars', source:'https://www.youtube.com/embed/sNybhKSsNpQ', icon: 'https://i.imgur.com/MN8pekf.png'},
        {id: 5, title: 'Challenge', icon: 'https://static.thenounproject.com/png/3405816-200.png'},
        {id: 6, title: 'Community', source:'https://www.youtube.com/embed/V60-q_xdjd0', icon: 'https://image.flaticon.com/icons/png/512/14/14598.png'},
        {id: 7, title: 'Berkeley, Bay Area & Silicon Valley', source: 'https://www.youtube.com/embed/bbFoiq4bovA', icon: 'https://i.ebayimg.com/images/g/IVUAAOSwkFZcNZM-/s-l300.png'},
        {id: 8, title: 'Resources', source:'https://www.youtube.com/embed/PX9Qlpns_3Q', icon: 'https://static.thenounproject.com/png/3031208-200.png'},
        {id: 9, title: 'Choosing M.E.T.', icon: 'https://static.thenounproject.com/png/972712-200.png'},
        {id: 10, title: 'Diversity & Social Impact', source: 'https://www.youtube.com/embed/3AYZzNenVfU', icon: 'https://static.thenounproject.com/png/1711240-200.png'},
        {id: 11, title: 'Recruiting', source: 'https://www.youtube.com/embed/FvzomQR0YPI', icon: 'https://cdn.onlinewebfonts.com/svg/img_115065.png'},
        {id: 12, title: 'Startups', source: 'https://www.youtube.com/embed/wYm6qsZ9B-E', icon: 'https://static.thenounproject.com/png/843013-200.png'},
        {id: 13, title: 'Small School within World-Class University', source: 'https://www.youtube.com/embed/vS7qBBiJU2E', icon: 'https://i.imgur.com/Ahg0M0n.png'},
        {id: 14, title: 'Software & Engineering Careers', source:'https://www.youtube.com/embed/65WTpXGhAJE', icon: 'https://static.thenounproject.com/png/2450624-200.png'},
        {id: 15, title: 'Business Careers', icon: 'https://i.imgur.com/SeopN4P.png'},
        {id: 16, title: 'Product Management Careers', icon: 'https://i.imgur.com/Y2cxQS3.png'},
        {id: 17, title: 'Biotech Careers', icon: 'https://image.flaticon.com/icons/png/512/3/3844.png'},
        {id: 18, title: 'Kleiner Perkins Fellows Internships', icon: 'https://i.imgur.com/vzj0e8N.png'},
        {id: 19, title: 'YCombinator/Skydeck Guaranteed Internships', icon: 'https://i.imgur.com/F4bQfX5.png'},
        {id: 20, title: 'BioE & Business', icon: 'https://static.thenounproject.com/png/2725688-200.png'},
        {id: 21, title: 'EECS & Business', icon: 'https://i.imgur.com/kGiwi4d.png'},
        {id: 22, title: 'MechE & Business', icon: 'https://static.thenounproject.com/png/2464439-200.png'},
        {id: 23, title: 'MSE & Business', icon: 'https://www.nicepng.com/png/full/278-2781253_molecular-lattice-physics-molecules-crystal-science-icon.png'},
        {id: 24, title: 'IEOR & Business', icon: 'https://i.pinimg.com/originals/df/2d/eb/df2deb53719aa039c92d326bc405b565.png'},

    ]

    const passcode = props.passcode

    const questionButtons = questionList.map((buttonInfo) =>
        <QuestionButton source={buttonInfo.source} key={buttonInfo.id} title={buttonInfo.title} icon={buttonInfo.icon}/>
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