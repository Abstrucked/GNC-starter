import Head from 'next/head'
import Image from 'next/image'

import {
    
    Box,
    Link,
    ButtonGroup,
    Grid,
    GridItem,
    Heading,
    Stack,
    StackItem
  } from "@chakra-ui/react"


  export async function getStaticPaths() {
    const pages = await getPages()
    
    // Get the paths we want to create based on posts
    const paths = pages.map((page) => ({
      params: { slug: page.slug  },
    }))
  
    // { fallback: false } means posts not found should 404.
    return { paths, fallback: false }
  }

export default function Header(props) {
    return(
        
        <div>
            <Box p="20" bgGradient="linear(to bottom right, #253140, #4e8e4d)" height={["auto"]}>
               
            <Stack color="white" direction={["column", "row", "row"]}>
               <Box marginRight={["0px","10px","100px"]}>LOGO</Box>
               <Stack spacing={["3","10"]} direction={["column", "row"]}>
                   <StackItem>Home</StackItem>
                   <StackItem>About</StackItem>
                   <StackItem>Team</StackItem>
                   
               </Stack>
            </Stack>  
                
            <Heading m={["2","24"]} w="100%" color="white" textAlign="center">Project description</Heading>     
            </Box>  
        </div>
        
    )
}