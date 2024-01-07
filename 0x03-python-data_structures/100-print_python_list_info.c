#include <Python.h>

/**
 * print_python_list_info - Prints basic info about python lists.
 * @p: A pyobject list.
 */
void print_python_list_info(PyObject *p)
{
	int size, alloc, i;
	PyObject *obj;

	size = Py_SIZE(p);
	alloc = ((PyListObject *)p)->allocated;

	printf("[*] Size of the python List = %d\n", size);
	printf("[*] Allocated = %d\n", alloc);

	for (i = 0; i < size; i++)
	{
		print("Element %d: ", i);

		obj = PyList_GetItem(p, i);
		printf("%s\p", Py_TYPE(obj)->tp_name);
	}
}
