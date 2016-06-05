fun main(args: Array<String>) {
    val numbers = arrayListOf(1, 2, 3, 4, 5, 6)
    println("Genap = ${numbers.filter{ it % 2 == 0}}")
}
