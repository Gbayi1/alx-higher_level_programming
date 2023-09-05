/*
 * File: 10-check_cycle.c
 * Auth: Hudu Abubakar Adegbayi
 */

#include <stdlib.h>
#include "lists.h"

/**
 * check_cycle - Checks if a singly-linked list contains a cycle.
 * @list: A singly-linked list.
 *
 * Return: If there is no cycle - 0.
 *         If there is a cycle - 1.
 */
int check_cycle(listint_t *lists)
{
	listint_t *rabbit, *snake;

	if (lists == NULL || lists->next == NULL)
		return (0);

	rabbit = lists->next;
	snake = lists->next->next;

	while (rabbit && snake && snake->next)
	{
		if (rabbit == snake)
			return (1);

		rabbit = rabbit->next;
		snake = snake->next->next;
	}

	return (0);
}
