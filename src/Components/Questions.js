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

        {id: 1, title: 'Dual Degree', source:'https://player.vimeo.com/video/659705968?h=a794b8e1bd', icon: 'https://i.imgur.com/o3o2LX6.png'},
        {id: 2, title: 'Small School within World Class University', source: 'https://player.vimeo.com/video/511389493', icon: 'https://i.imgur.com/dDb39hY.png'},
        {id: 3, title: 'M.E.T. Students', source: 'https://player.vimeo.com/video/659705099?h=d2bb63752b', icon: 'https://image.flaticon.com/icons/png/512/14/14598.png'},
        {id: 4, title: 'Resources', source:'https://player.vimeo.com/video/659704326?h=226f11a564', icon: 'https://static.thenounproject.com/png/3031208-200.png'},
        {id: 5, title: 'The M.E.T. Challenge', source:'https://player.vimeo.com/video/659700049?h=f40dcc58a9', icon: 'https://i.imgur.com/Mukus1Y.png'},
        {id: 6, title: 'Startups', source: 'https://player.vimeo.com/video/659702669?h=6c97b1b7ea', icon: 'https://static.thenounproject.com/png/843013-200.png'},
        {id: 7, title: 'Berkeley, Bay Area & Silicon Valley', source: 'https://player.vimeo.com/video/659700792?h=4ffb6f66d7', icon: 'https://i.imgur.com/H0eJbPJ.png'},
        {id: 8, title: 'M.E.T. Community', source:'https://player.vimeo.com/video/659711027?h=99cff29f99', icon: 'https://i.imgur.com/cpjukm0.png'},
        {id: 9, title: 'Choosing M.E.T.', source:'https://player.vimeo.com/video/669226849?h=45833a001b', icon: 'https://static.thenounproject.com/png/972712-200.png'},
        {id: 10, title: 'Research', source: 'https://player.vimeo.com/video/659706759?h=b6681a046e', icon: 'https://i.imgur.com/ByQmY9l.png'},
        {id: 11, title: 'Diversity and Social Impact', source: 'https://player.vimeo.com/video/511412074', icon: 'https://static.thenounproject.com/png/1711240-200.png'},
        {id: 12, title: 'Extracurriculars', source:'https://player.vimeo.com/video/659708067?h=788de2df93', icon: 'https://i.imgur.com/MN8pekf.png'},
        {id: 13, title: 'Recruiting', source: 'https://player.vimeo.com/video/659712700?h=dbf781a27d', icon: 'https://i.imgur.com/UjuEBMk.png'},
        {id: 14, title: 'Technology Careers', source:'https://player.vimeo.com/video/659709486?h=0437a94793', icon: 'https://i.imgur.com/CL0wwhn.png'},
        {id: 15, title: 'BioTech and MedTech Careers', source:'https://player.vimeo.com/video/511443056', icon: 'https://i.imgur.com/PcDTCfS.png'},
        {id: 16, title: 'Technology + Business Careers', source:'https://player.vimeo.com/video/659716986?h=87a8fa45c3', icon: 'https://i.imgur.com/4HLiW4R.png'},
        {id: 17, title: 'Business Careers', source:'https://player.vimeo.com/video/659701706?h=165a3c5129', icon: 'https://i.imgur.com/k4nfqGm.png'},
        {id: 18, title: 'Kleiner Perkins Fellows Internships', source:'https://player.vimeo.com/video/511447059', icon: 'https://i.imgur.com/vzj0e8N.png'},
        {id: 19, title: 'YCombinator and SkyDeck Guaranteed Internships', source:'https://player.vimeo.com/video/511446561', icon: 'https://i.imgur.com/LL7k3Hy.png'},
        {id: 20, title: 'EECS + Business', source:'https://player.vimeo.com/video/659703514?h=45b7e012a3', icon: 'https://i.imgur.com/73qXgjh.png'},
        {id: 21, title: 'BioE + Business', source:'https://player.vimeo.com/video/511446411', icon: 'https://static.thenounproject.com/png/2725688-200.png'},
        {id: 22, title: 'MechE + Business', source:'https://player.vimeo.com/video/511450076', icon: 'https://static.thenounproject.com/png/2464439-200.png'},
        {id: 23, title: 'IEOR + Business', source:'https://player.vimeo.com/video/511449249', icon: 'https://i.pinimg.com/originals/df/2d/eb/df2deb53719aa039c92d326bc405b565.png'},
        {id: 24, title: 'MSE + Business', source:'https://player.vimeo.com/video/511449782', icon: 'https://i.imgur.com/XVjl9UR.png'},

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