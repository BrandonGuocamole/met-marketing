import React from 'react'
import QuestionButton from './QuestionButton.js'
import {
    Flex,
    Center,
} from '@chakra-ui/react'

function Questions (props) {
    // Currently the same button is repeated multiple times. 
    // To implement the video feature, a link to a folder containing all the videos for each question will probably need to be included in the JSON object defined below.
    // Currently this is set up to take in as many questions as needed. The question boxes are of a fixed sized but will rearrange to fit multiple layouts because of a flex component.

    const questionList = [

        {id: 1, title: 'Dual Degree', source:'https://player.vimeo.com/video/506411516', icon: 'https://i.imgur.com/o3o2LX6.png'},
        {id: 2, title: 'Small School within World Class University', source: 'https://player.vimeo.com/video/506326921', icon: 'https://i.imgur.com/dDb39hY.png'},
        {id: 3, title: 'M.E.T. Students', source: 'https://player.vimeo.com/video/506326212', icon: 'https://image.flaticon.com/icons/png/512/14/14598.png'},
        {id: 4, title: 'Resources', source:'https://player.vimeo.com/video/506326794', icon: 'https://static.thenounproject.com/png/3031208-200.png'},
        {id: 5, title: 'The M.E.T. Challenge', source:'https://player.vimeo.com/video/506331988', icon: 'https://i.imgur.com/Mukus1Y.png'},
        {id: 6, title: 'Startups', source: 'https://player.vimeo.com/video/506327007', icon: 'https://static.thenounproject.com/png/843013-200.png'},
        {id: 7, title: 'Berkeley, Bay Area & Silicon Valley', source: 'https://player.vimeo.com/video/506323345', icon: 'https://i.imgur.com/H0eJbPJ.png'},
        {id: 8, title: 'M.E.T. Community', source:'https://player.vimeo.com/video/506326038', icon: 'https://i.imgur.com/cpjukm0.png'},
        {id: 9, title: 'Choosing M.E.T.', source:'https://player.vimeo.com/video/506325651', icon: 'https://static.thenounproject.com/png/972712-200.png'},
        {id: 10, title: 'Research', source: 'https://player.vimeo.com/video/506326627', icon: 'https://i.imgur.com/ByQmY9l.png'},
        {id: 11, title: 'Diversity and Social Impact', source: 'https://player.vimeo.com/video/506324760', icon: 'https://static.thenounproject.com/png/1711240-200.png'},
        {id: 12, title: 'Extracurriculars', source:'https://player.vimeo.com/video/506325382', icon: 'https://i.imgur.com/MN8pekf.png'},
        {id: 13, title: 'Recruiting', source: 'https://player.vimeo.com/video/506326444', icon: 'https://i.imgur.com/UjuEBMk.png'},
        {id: 14, title: 'Technology Careers', source:'https://player.vimeo.com/video/506331842', icon: 'https://i.imgur.com/CL0wwhn.png'},
        {id: 15, title: 'BioTech and MedTech Careers', source:'https://player.vimeo.com/video/506324119', icon: 'https://i.imgur.com/PcDTCfS.png'},
        {id: 16, title: 'Technology + Business Careers', source:'https://player.vimeo.com/video/506327212', icon: 'https://i.imgur.com/4HLiW4R.png'},
        {id: 17, title: 'Business Careers', source:'https://player.vimeo.com/video/506324335', icon: 'https://i.imgur.com/k4nfqGm.png'},
        {id: 18, title: 'Kleiner Perkins Fellows Internships', source:'https://player.vimeo.com/video/506325948', icon: 'https://i.imgur.com/vzj0e8N.png'},
        {id: 19, title: 'YCombinator and Skydeck Guaranteed Internships', source:'https://player.vimeo.com/video/506332178', icon: 'https://i.imgur.com/LL7k3Hy.png'},
        {id: 20, title: 'EECS + Business', source:'https://player.vimeo.com/video/506325178', icon: 'https://i.imgur.com/73qXgjh.png'},
        {id: 21, title: 'BioE + Business', source:'https://player.vimeo.com/video/506323805', icon: 'https://static.thenounproject.com/png/2725688-200.png'},
        {id: 22, title: 'MechE + Business', source:'https://player.vimeo.com/video/506326397', icon: 'https://static.thenounproject.com/png/2464439-200.png'},
        {id: 23, title: 'IEOR + Business', source:'https://player.vimeo.com/video/506325557', icon: 'https://i.pinimg.com/originals/df/2d/eb/df2deb53719aa039c92d326bc405b565.png'},
        {id: 24, title: 'MSE + Business', source:'https://player.vimeo.com/video/506326366', icon: 'https://i.imgur.com/XVjl9UR.png'},

    ]


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