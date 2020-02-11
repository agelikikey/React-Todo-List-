import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [list, setlist] = useState([]);
	const [content, setContent] = useState();

	return (
		<>
			<div className="text-center mt-5 pt-5">
				<h1>ToDo List!</h1>
                <input 
                value={content}
                onChange={e => setContent(e.target)} 
                oneKeyPress={e => {
                    if (e.key === "Enter") {
                            setlist(list.concat(content));
                            setContent("Add a Task");
                    }
                }}
                />
				{list.map((item, index) => {
					return <div key={index}>{item}</div>;
				})}
			</div>
		</>
	);
}
