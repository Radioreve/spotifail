import NextImage from "next/image"

import { Box, List, Divider, ListItem } from "@chakra-ui/layout"

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md"
import PlayerListItem from "./PlayerListItem"

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
]

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
]

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="180px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.png" height={70} width={230} />
        </Box>
        <Box>
          <List spacing={1}>
            {navMenu.map((item) => (
              <PlayerListItem {...item} />
            ))}
          </List>
        </Box>
        <Divider my="20px" color="gray.800" />
        <Box marginBottom="20px">
          <List spacing={1}>
            {musicMenu.map((item) => (
              <PlayerListItem {...item} />
            ))}
          </List>
        </Box>
        <Divider color="gray.800" marginY="20px" />
        <Box height="66%" overflowY="auto">
          <List spacing={1}>
            {new Array(50).fill(1).map(() => (
              <ListItem>Super playlist</ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
