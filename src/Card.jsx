function Card({name, age, isStudent}){

    return(<>
            <div className="p-10 inline-block border-2 rounded-3xl m-20 max-w-md">
                <p className="text-2xl font-semibold text-center">name: {name}</p>
                <p className="text-2xl font-semibold text-center">age: {age}</p>
                <p className="text-2xl font-semibold text-center">isStudent: { isStudent ? "YES" : "NO"}</p>

            </div>
        </>)
}
export default Card;