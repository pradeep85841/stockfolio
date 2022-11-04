import React from "react"
import BlockCard from "./BlockCard"

const Blocks = (props) => {
	const {blockList = [[]]} = props
	return (
		<div>
			{blockList.map(() => (
				<BlockCard />
			))}
		</div>
	)
}

export default Blocks
