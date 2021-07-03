package main

import (
	"fmt"
	"runtime"
	"sync"
	"time"
)

func f1(wg *sync.WaitGroup) {
	fmt.Println("f1 has been started")
	for i := 0; i < 3; i++ {
		fmt.Println("f1: i =", i)
		time.Sleep(time.Second)
	}
	fmt.Println("f1 has been stopped")
	wg.Done()
}

func f2() {
	fmt.Println("f2 has been started")
	for i := 0; i < 3; i++ {
		fmt.Println("f2: i =", i)
	}
	fmt.Println("f2 has been stopped")
}

func main() {
	var wg sync.WaitGroup
	wg.Add(1) // for f1

	fmt.Println("Main execution started")
	fmt.Println("No. of CPU:", runtime.NumCPU())
	fmt.Println("No. of GoRoutings", runtime.NumGoroutine())

	fmt.Println("OS:", runtime.GOOS, ", Arch:", runtime.GOARCH)

	fmt.Println("Max threads in Go", runtime.GOMAXPROCS(0))

	go f1(&wg)
	fmt.Println("No of goRoutings after f1:", runtime.NumGoroutine())
	f2()
	wg.Wait()
	fmt.Println("Main execution ended")
}
