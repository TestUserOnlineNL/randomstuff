fun GfG(){
	val obj = "Hello"

	val result = when (obj) {
		// Checks whether obj equals to "1"
		"1" -> "One"
		// Checks whether obj equals to "Hello"
		"Hello" -> "${obj} GeeksforGeeks"
		// Default statement
		else -> "Unknown"
	}
	// Greeting
	println(result)
}
fun main() {

	for (t in 1..3){
		print("$t ")
		GfG()
	}
}
