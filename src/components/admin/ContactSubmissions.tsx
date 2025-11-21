import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { getContactSubmissions, updateContactSubmissionStatus } from "@/db/api";
import type { ContactSubmission } from "@/types/types";
import { Mail, Phone, Calendar, Eye } from "lucide-react";

export default function ContactSubmissions() {
  const { toast } = useToast();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    loadSubmissions();
  }, []);

  async function loadSubmissions() {
    setLoading(true);
    const data = await getContactSubmissions();
    setSubmissions(data);
    setLoading(false);
  }

  async function handleStatusChange(id: string, status: string) {
    const success = await updateContactSubmissionStatus(id, status);
    if (success) {
      toast({ title: "Success", description: "Status updated successfully" });
      loadSubmissions();
    } else {
      toast({ title: "Error", description: "Failed to update status", variant: "destructive" });
    }
  }

  function handleView(submission: ContactSubmission) {
    setSelectedSubmission(submission);
    setDialogOpen(true);
  }

  function getStatusColor(status: string) {
    switch (status) {
      case "new":
        return "bg-blue-500";
      case "contacted":
        return "bg-yellow-500";
      case "closed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  if (loading) {
    return <div className="text-center py-8">Loading contact submissions...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          {submissions.length} {submissions.length === 1 ? "submission" : "submissions"}
        </p>
        <Button variant="outline" onClick={loadSubmissions}>
          Refresh
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No contact submissions yet.
                </TableCell>
              </TableRow>
            ) : (
              submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">{submission.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3 text-muted-foreground" />
                      {submission.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      {formatDate(submission.created_at)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(submission.status)}>
                      {submission.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleView(submission)}
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      {submission.status === "new" && (
                        <Button
                          size="sm"
                          onClick={() => handleStatusChange(submission.id, "contacted")}
                        >
                          Mark Contacted
                        </Button>
                      )}
                      {submission.status === "contacted" && (
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => handleStatusChange(submission.id, "closed")}
                        >
                          Close
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Contact Submission Details</DialogTitle>
            <DialogDescription>
              Submitted on {selectedSubmission && formatDate(selectedSubmission.created_at)}
            </DialogDescription>
          </DialogHeader>
          {selectedSubmission && (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Name</h4>
                <p>{selectedSubmission.name}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </h4>
                <p>{selectedSubmission.email}</p>
              </div>
              {selectedSubmission.phone && (
                <div>
                  <h4 className="font-semibold mb-1 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone
                  </h4>
                  <p>{selectedSubmission.phone}</p>
                </div>
              )}
              <div>
                <h4 className="font-semibold mb-1">Message</h4>
                <p className="whitespace-pre-wrap bg-secondary/30 p-4 rounded-lg">
                  {selectedSubmission.message}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Status</h4>
                <Badge className={getStatusColor(selectedSubmission.status)}>
                  {selectedSubmission.status}
                </Badge>
              </div>
              <div className="flex gap-2 pt-4">
                {selectedSubmission.status === "new" && (
                  <Button
                    onClick={() => {
                      handleStatusChange(selectedSubmission.id, "contacted");
                      setDialogOpen(false);
                    }}
                  >
                    Mark as Contacted
                  </Button>
                )}
                {selectedSubmission.status === "contacted" && (
                  <Button
                    variant="secondary"
                    onClick={() => {
                      handleStatusChange(selectedSubmission.id, "closed");
                      setDialogOpen(false);
                    }}
                  >
                    Close Submission
                  </Button>
                )}
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
