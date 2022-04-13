import { LinkBox, LinkOverlay, ListIcon, ListItem } from "@chakra-ui/layout"
import Link from "next/link"
import React from "react"

export type PlayerMenuItemProps = {
  name: string
  route: string
  icon: React.FC
}

const PlayerListItem: React.FC<PlayerMenuItemProps> = ({
  name,
  route,
  icon,
}) => (
  <ListItem paddingX="10px" fontSize="16px" key={name}>
    <LinkBox>
      <Link href={route} passHref>
        <LinkOverlay>
          <ListIcon as={icon} color="white" marginRight="20px" />
          {name}
        </LinkOverlay>
      </Link>
    </LinkBox>
  </ListItem>
)

export default PlayerListItem
