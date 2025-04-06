import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, Download, MoreHorizontal, Plus, Search } from "lucide-react"

// Simulated members data
const members = [
  {
    id: 1,
    name: "Emma Wilson",
    email: "emma.wilson@example.edu",
    joinDate: "Sep 12, 2022",
    status: "Active",
    role: "Member",
    department: "Computer Science",
    year: "Senior",
  },
  {
    id: 2,
    name: "James Taylor",
    email: "james.taylor@example.edu",
    joinDate: "Oct 5, 2022",
    status: "Active",
    role: "Member",
    department: "Software Engineering",
    year: "Junior",
  },
  {
    id: 3,
    name: "Olivia Martinez",
    email: "olivia.martinez@example.edu",
    joinDate: "Aug 18, 2022",
    status: "Active",
    role: "Board Member",
    department: "Graphic Design",
    year: "Senior",
  },
  {
    id: 4,
    name: "Noah Johnson",
    email: "noah.johnson@example.edu",
    joinDate: "Jan 20, 2023",
    status: "Active",
    role: "Member",
    department: "Information Systems",
    year: "Sophomore",
  },
  {
    id: 5,
    name: "Ava Williams",
    email: "ava.williams@example.edu",
    joinDate: "Feb 15, 2023",
    status: "Active",
    role: "Member",
    department: "Data Science",
    year: "Freshman",
  },
  {
    id: 6,
    name: "William Brown",
    email: "william.brown@example.edu",
    joinDate: "Mar 8, 2023",
    status: "Inactive",
    role: "Member",
    department: "Computer Engineering",
    year: "Junior",
  },
  {
    id: 7,
    name: "Sophia Rodriguez",
    email: "sophia.rodriguez@example.edu",
    joinDate: "Oct 3, 2022",
    status: "Active",
    role: "Board Member",
    department: "Software Engineering",
    year: "Graduate",
  },
  {
    id: 8,
    name: "Benjamin Garcia",
    email: "benjamin.garcia@example.edu",
    joinDate: "Mar 30, 2023",
    status: "Pending",
    role: "Member",
    department: "Computer Science",
    year: "Senior",
  },
]

export default function MembersPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-3xl font-bold tracking-tight">Member Management</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/admin/dashboard/members/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Member
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Members</CardTitle>
          <CardDescription>View and manage all club members. You can add, edit, or remove members.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search members..." className="h-9" />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Select defaultValue="all">
                <SelectTrigger className="h-9 w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All Members</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="h-9 w-[180px]">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="board">Board Member</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead className="hidden md:table-cell">Department</TableHead>
                  <TableHead className="w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted">
                          <Image
                            src={`/placeholder.svg?height=40&width=40`}
                            alt={member.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-muted-foreground">{member.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          member.status === "Active" ? "default" : member.status === "Pending" ? "outline" : "secondary"
                        }
                        className={
                          member.status === "Active"
                            ? "bg-green-600"
                            : member.status === "Pending"
                              ? "border-yellow-500 text-yellow-500"
                              : "bg-gray-500"
                        }
                      >
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={member.role === "Board Member" ? "default" : "outline"}
                        className={member.role === "Board Member" ? "bg-blue-600" : ""}
                      >
                        {member.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <CalendarDays className="mr-1 h-3 w-3 text-muted-foreground" />
                        {member.joinDate}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex flex-col">
                        <span>{member.department}</span>
                        <span className="text-xs text-muted-foreground">{member.year}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/dashboard/members/${member.id}`}>View Profile</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/dashboard/members/${member.id}/edit`}>Edit Member</Link>
                          </DropdownMenuItem>
                          {member.status === "Active" ? (
                            <DropdownMenuItem className="text-yellow-600">Deactivate</DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem className="text-green-600">Activate</DropdownMenuItem>
                          )}
                          {member.role === "Member" ? (
                            <DropdownMenuItem>Promote to Board</DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>Demote to Member</DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-red-600">Remove Member</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

