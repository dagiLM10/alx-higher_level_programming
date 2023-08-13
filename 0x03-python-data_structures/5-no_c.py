#!/usr/bin/python3
# 5-no_c.py

def no_c(my_string):
  """Remove all characters c and C from string."""
  copy = [x for x in my_string if != 'c' and x != 'C']
  return ("".join(copy))
