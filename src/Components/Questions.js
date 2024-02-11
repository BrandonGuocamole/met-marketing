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
        {id: 1, title: 'Dual Degree', source:'https://player.vimeo.com/video/911950560?h=dada011841', icon: 'https://i.imgur.com/o3o2LX6.png'},
        {id: 2, title: 'Small School within World Class University', source: 'https://player.vimeo.com/video/911961455?h=e0be8b942e', icon: 'https://i.imgur.com/dDb39hY.png'},
        {id: 3, title: 'M.E.T. Students', source: 'https://player.vimeo.com/video/911961434?h=1b8c83eb26', icon: 'https://i.imgur.com/bUuzJnr.png'},
        {id: 4, title: 'Resources', source:'https://player.vimeo.com/video/911961036?h=9e936e6612', icon: 'https://static.thenounproject.com/png/3031208-200.png'},
        {id: 5, title: 'The M.E.T. Challenge', source:'https://player.vimeo.com/video/911961162?h=b3c8aac0a1', icon: 'https://i.imgur.com/Mukus1Y.png'},
        {id: 6, title: 'Startups', source: 'https://player.vimeo.com/video/911961129?h=53d6ce761c', icon: 'https://static.thenounproject.com/png/843013-200.png'},
        {id: 7, title: 'Berkeley, Bay Area & Silicon Valley', source: 'https://player.vimeo.com/video/911950841?h=a6d85d9293', icon: 'https://i.imgur.com/H0eJbPJ.png'},
        {id: 8, title: 'M.E.T. Community', source:'https://player.vimeo.com/video/911950796?h=6d18aa13ee', icon: 'https://i.imgur.com/cpjukm0.png'},
        {id: 9, title: 'Choosing M.E.T.', source:'https://player.vimeo.com/video/850785931', icon: 'https://static.thenounproject.com/png/972712-200.png'},
        {id: 10, title: 'Research', source: 'https://player.vimeo.com/video/911961102?h=4b26e11a84', icon: 'https://i.imgur.com/ByQmY9l.png'},
        {id: 11, title: 'Diversity and Social Impact', source: 'https://player.vimeo.com/video/850786588', icon: 'https://static.thenounproject.com/png/1711240-200.png'},
        {id: 12, title: 'Extracurriculars', source:'https://player.vimeo.com/video/911951646?h=4b04f1b12c', icon: 'https://i.imgur.com/MN8pekf.png'},
        {id: 13, title: 'Recruiting', source: 'https://player.vimeo.com/video/911961081?h=31f1918f67', icon: 'https://i.imgur.com/UjuEBMk.png'},
        {id: 14, title: 'Technology Careers', source:'https://player.vimeo.com/video/911960572?h=aa3409b827', icon: 'https://i.imgur.com/CL0wwhn.png'},
        {id: 15, title: 'BioTech and MedTech Careers', source:'https://player.vimeo.com/video/911951036?h=5d447d5c21', icon: 'https://i.imgur.com/PcDTCfS.png'},
        {id: 16, title: 'Technology + Business Careers', source:'https://player.vimeo.com/video/911950609?h=ba2256596c', icon: 'https://i.imgur.com/4HLiW4R.png'},
        {id: 17, title: 'Business Careers', source:'https://player.vimeo.com/video/911951094?h=fa31d0ec0e', icon: 'https://i.imgur.com/k4nfqGm.png'},
        {id: 18, title: 'Kleiner Perkins Fellows Internships', source:'https://player.vimeo.com/video/911909894?h=ef4794bd4e', icon: 'https://i.imgur.com/vzj0e8N.png'},
        {id: 19, title: 'YCombinator and SkyDeck Guaranteed Internships', source:'https://player.vimeo.com/video/911961535?h=5df1a0870f', icon: 'https://i.imgur.com/LL7k3Hy.png'},
        {id: 20, title: 'EECS + Business', source:'https://player.vimeo.com/video/911951177?h=f5b2f470c5', icon: 'https://i.imgur.com/73qXgjh.png'},
        {id: 21, title: 'BioE + Business', source:'https://player.vimeo.com/video/911951000?h=7ddab77386', icon: 'https://static.thenounproject.com/png/2725688-200.png'},
        {id: 22, title: 'MechE + Business', source:'https://player.vimeo.com/video/911961504?h=bb9e62dd7b', icon: 'https://static.thenounproject.com/png/2464439-200.png'},
        {id: 23, title: 'IEOR + Business', source:'https://player.vimeo.com/video/911952040?h=1d1ad3ffa0', icon: 'https://i.pinimg.com/originals/df/2d/eb/df2deb53719aa039c92d326bc405b565.png'},
        {id: 24, title: 'MSE + Business', source:'https://player.vimeo.com/video/911952762?h=de3d2711df', icon: 'https://i.imgur.com/XVjl9UR.png'},
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