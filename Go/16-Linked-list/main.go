package main

import (
	"fmt"
	"strings"
)

type node struct {
	value int
	next  *node
}

func (n node) String() string {
	return fmt.Sprintf("%d", n.value)
}

type linkedList struct {
	head *node
	len  int
}

func (l *linkedList) add(value int) {
	newNode := new(node)
	newNode.value = value

	if l.head == nil {
		l.head = newNode
	} else {
		iterator := l.head
		for ; iterator.next != nil; iterator = iterator.next {
		}
		iterator.next = newNode
	}
}

func (l *linkedList) remove(value int) {
	var previous *node

	for current := l.head; current != nil; current = current.next {
		if current.value == value {
			if l.head == current {
				l.head = current.next
			} else {
				previous.next = current.next
				return
			}
		}

		previous = current
	}

}

func (l linkedList) get(value int) *node {
	for iteractor := l.head; iteractor != nil; iteractor = iteractor.next {
		if iteractor.value == value {
			return iteractor
		}
	}
	return nil
}

func (l linkedList) String() string {
	sb := strings.Builder{}

	for iterator := l.head; iterator != nil; iterator = iterator.next {
		sb.WriteString(fmt.Sprintf("%s ", iterator))
	}

	return sb.String()
}

func main() {
	fmt.Println("Hello 世界")

	l := linkedList{}
	l.add(1)
	l.add(2)
	l.add(3)
	l.add(4)
	l.add(5)
	fmt.Println(l)
	fmt.Println(*(l.get(5)))
	l.remove(3)
	l.remove(5)
	fmt.Println(l)
	l.remove(1)
	fmt.Println(l)
}
