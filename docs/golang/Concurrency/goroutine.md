---
title: Concurrency in Golang
description: How to handle concurrency in golang.
slug: concurrency-basic
authors:
  - name: Ritesh Sonawane
    title: Associate SRE @CloudRaft ⛵
    url: https://riteshsonawane.com
    image_url: img/round-profile.png
tags: [programming, golang, concurrency]
image: img/round-profile.png
hide_table_of_contents: true
---

> `coroutine`  -> It's a type of function that allows us to start or pause a function execution. They are mostly used to handle asynchronous task or to manage concurrency in light way 


So goroutine is basically starting a coroutine
```
go func() // start a coroutine
```

### Concurrency 

-  Multiple task are executed simultaneously. We're not doing everything at the same time but handling multiple task by switching between them. Managing multiple task but only one task is active at a time. 

### Parallelism 

-  Running multiple task side by side 

### Thread 

- There can be multiple threads in one process 

-  A `Process` is like a company. While a `thread` is like people working in that company doing specific job. 


## Scheduling a Goroutine

Golang uses GPM scheduling mode.

> G -> Goroutine  `These are tasks` 
> P -> Processor    `These are chefs`
> M -> Machine    `These are stove (gas)`


`G` -> 
	Goroutine are lightweight function which we want to execute

`P` -> 
	 Processor are logical entity which schedules and run goroutine. It decides which goroutine will get CPU time. `GOMAXPROCS` var controls the no. of processors. This var represents the true concurrency level 

`M` -> 
	 A Machine represents an OS thread. It executes the code for goroutine assigned by processor 

## Using Goroutine 

```go
num := runtime.NumCPU() // Get logical cpus 
runtime.GOMAXPROCS(num)
```

```go
package main

import (
	"fmt"
	"time"
)

func add(a int, b int) {
	c := a + b
	fmt.Printf("%d + %d = %d\n", a, b, c)
}

func main() {
	for i := 0; i < 10; i++ {
		go add(i, i+1) // Create 10 goroutine
	}
	time.Sleep(time.Second * 2) // Wait for goroutine to execute
}
```

### Defer keyword 

It is used to execute something after a function is executed. Check below example, they run in last-in, first-out order 

```go
package main

import "fmt"

func main() {
	fmt.Println("Start cooking")

	defer fmt.Println("Clean the counter") // This will run last
	defer fmt.Println("Turn off the stove") // This will run before cleaning

	fmt.Println("Cooking in progress...")
}

```

OUTPUT 
```python
Start cooking
Cooking in progress...
Turn off the stove
Clean the counter
```


### Goroutine Exception 

Goroutine doesn't have in-built way to handle exception (like try-catch). If a goroutine throws an error it will crash the program unless the error is recovered 

**Key Rule**: Always use `defer-recover` **inside the goroutine**. If you put it in the main function, it won’t catch panics from other goroutines.

EXAMPLE: This will panic only when the value of c is 20 
```go
func add(a int, b int) {
	c := a + b
	fmt.Printf("%d + %d = %d\n", a, b, c)
  if c == 20 {
    panic("Testing panic with goroutine")
  }
}

func main() {
  defer func() {
    if err:= recover(); err!=nil{
      fmt.Println("Panic occured!")
    }
  }()
	for i := 0; i < 10; i++ {
		go add(i, i+1)
	}
	time.Sleep(time.Second * 2)

}
```

So basically here your goroutine failed and to do a clean up you use a defer function to check if there is any panic/recover and you do the clean up. If the execution was without a err you won't see anything from defer 


> NOTE: Till now nothing was synchronous. Everything was random. 


### Synchronized Goroutine 

Synchronized goroutine ensures that multiple goroutine works together in an organized way without causing any issue. Below are ways to synchronize your goroutine 

1.  `sync.WaitGroup` : To wait for multiple goroutine to complete 
2.  `sync.Mutex` : To prevent multiple goroutine from modifying shared data at same time 
3.  `Channels` : They are used to enable communication between goroutine 
4. `sync.Cond`: Used for complex signaling between goroutine 
5. `sync/atomic`: Used for lightweight atomic operation on shared data 

#### Sync WaitGroup

We can use waitgroup to wait until goroutine execution is completed. Let's see below example 

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func worker(id int, wg *sync.WaitGroup) {

	defer wg.Done() //Reduce the counter once this function is executed
	fmt.Printf("Worker %d is starting \n", id)
	time.Sleep(time.Second*1)
	fmt.Printf("Worker %d completed \n", id)
}

func main() {
  var wg sync.WaitGroup
	for i := 0; i < 3; i++ {
    wg.Add(1)
    go worker(i,&wg)
	}
  wg.Wait()
}
```

OUTPUT
```go
 ➜ go run main.go 
Worker 2 is starting 
Worker 0 is starting 
Worker 1 is starting 
Worker 2 completed 
Worker 0 completed 
Worker 1 completed 
```

Working:
1. `wg.Add(1)` : This increases the counter before launching a goroutine. 
2. `wg.Done()`: Each goroutine will call Done once the execution is completed. In this way the goroutine which started first will complete the task first. More like a first-in first-out.
3. `wg.Wait()`: Block execution until all goroutine complete 

#### Sync Mutex

If multiple goroutine operate on same variable, we use `Mutex (mutual exclusion lock)` to ensure that only 1 goroutine can access that variable at a time. 

```go
package main

import (
	"fmt"
	"sync"
)

var counter int
var mu sync.Mutex

func worker(wg *sync.WaitGroup) {
	defer wg.Done()
	mu.Lock()   //Locking so other goroutine cannot modify this value
	counter++   //counter+1
	mu.Unlock() //Unlock the counter so other goroutines can access it.
}

func main() {
	var wg sync.WaitGroup

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go worker(&wg)
	}

	wg.Wait() //We need to add wait otherwise the main func execution will be completed
	fmt.Println("The final value is:", counter)

}

```

Working:
	Here mu.lock is blocking the access of `counter` within the function. Because `counter` is a global variable if you don't unlock it you won't be able to access the data at that particular address. 

#### Channels 
Instead of memory sharing, golang encourage us to use message passing using channels 

```go
package main

import "fmt"

func worker(id int, ch chan string) {
	ch <- fmt.Sprintf("The id is: %d", id)
}

func main() {
	var ch = make(chan string)
	for i := 0; i < 10; i++ {
		go worker(i, ch)
	}

	//Receive from ch
	for i := 0; i < 10; i++ {
		fmt.Println(<-ch)
	}


```



#### Sync.Cond 

We can use `sync.Cond` when multiple go routines needs to wait for a specific condition 
```go
package main

import (
	"fmt"
	"sync"
	"time"
)

var ready = false
var mu sync.Mutex
var cond = sync.NewCond(&mu)

func worker(id int) {
	mu.Lock()
	for !ready { // Wait until ready is true
		cond.Wait()
	}
	mu.Unlock()
	fmt.Printf("Worker %d started\n", id)
}

func main() {
	for i := 1; i <= 3; i++ {
		go worker(i)
	}

	time.Sleep(time.Second) // Simulate some work
	mu.Lock()
	ready = true
	mu.Unlock()
	cond.Broadcast() // Notify all waiting goroutines
}
```


#### sync/atomic

If you need to **increment or modify a value safely without a full Mutex**, you can use atomic operations.


```go
package main

import (
	"fmt"
	"sync"
	"sync/atomic"
)

var counter int32

func increment(wg *sync.WaitGroup) {
	defer wg.Done()
	atomic.AddInt32(&counter, 1)
}

func main() {
	var wg sync.WaitGroup

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go increment(&wg)
	}

	wg.Wait()
	fmt.Println("Final Counter:", counter)
}
```


- `atomic.AddInt32(&counter, 1)` ensures thread-safe addition **without using a Mutex**.

    > Note: This was just an overview of concurrency in golang.
