/*
 * This Kotlin source file was generated by the Gradle 'init' task.
 */
package quick.start

data class Vegetable(val name: String, val age: Int, val countryOrigin:String)

fun main() {
    var lista = mutableListOf(Vegetable("Tomato", 10, "Spain"), Vegetable("Cabbage", 3, "Japan"), Vegetable("Cucumber", 11, "Great Britain"))
    println(lista)
}