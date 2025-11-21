import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { getPortfolioItems, createPortfolioItem, updatePortfolioItem, deletePortfolioItem } from "@/db/api";
import type { PortfolioItem, PortfolioItemInput } from "@/types/types";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";

export default function PortfolioManager() {
  const { toast } = useToast();
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [formData, setFormData] = useState<PortfolioItemInput>({
    image_url: "",
    views: "",
    type: "",
    title: "",
    description: "",
    display_order: 0,
    is_featured: false
  });

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    setLoading(true);
    const data = await getPortfolioItems();
    setItems(data);
    setLoading(false);
  }

  function handleEdit(item: PortfolioItem) {
    setEditingItem(item);
    setFormData({
      image_url: item.image_url,
      views: item.views,
      type: item.type,
      title: item.title || "",
      description: item.description || "",
      display_order: item.display_order,
      is_featured: item.is_featured
    });
    setDialogOpen(true);
  }

  function handleAdd() {
    setEditingItem(null);
    setFormData({
      image_url: "",
      views: "",
      type: "",
      title: "",
      description: "",
      display_order: items.length,
      is_featured: false
    });
    setDialogOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (editingItem) {
      const success = await updatePortfolioItem(editingItem.id, formData);
      if (success) {
        toast({ title: "Success", description: "Portfolio item updated successfully" });
        loadItems();
        setDialogOpen(false);
      } else {
        toast({ title: "Error", description: "Failed to update portfolio item", variant: "destructive" });
      }
    } else {
      const result = await createPortfolioItem(formData);
      if (result) {
        toast({ title: "Success", description: "Portfolio item created successfully" });
        loadItems();
        setDialogOpen(false);
      } else {
        toast({ title: "Error", description: "Failed to create portfolio item", variant: "destructive" });
      }
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this portfolio item?")) return;

    const success = await deletePortfolioItem(id);
    if (success) {
      toast({ title: "Success", description: "Portfolio item deleted successfully" });
      loadItems();
    } else {
      toast({ title: "Error", description: "Failed to delete portfolio item", variant: "destructive" });
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading portfolio items...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          {items.length} portfolio {items.length === 1 ? "item" : "items"}
        </p>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAdd}>
              <Plus className="w-4 h-4 mr-2" />
              Add Portfolio Item
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingItem ? "Edit" : "Add"} Portfolio Item</DialogTitle>
              <DialogDescription>
                {editingItem ? "Update the portfolio item details" : "Add a new portfolio item to showcase"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="image_url">Image URL *</Label>
                <Input
                  id="image_url"
                  required
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="views">Views *</Label>
                  <Input
                    id="views"
                    required
                    value={formData.views}
                    onChange={(e) => setFormData({ ...formData, views: e.target.value })}
                    placeholder="300K+"
                  />
                </div>
                <div>
                  <Label htmlFor="type">Type *</Label>
                  <Input
                    id="type"
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    placeholder="30s Reels"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="title">Title (Optional)</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Portfolio item title"
                />
              </div>
              <div>
                <Label htmlFor="description">Description (Optional)</Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description"
                />
              </div>
              <div>
                <Label htmlFor="display_order">Display Order</Label>
                <Input
                  id="display_order"
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                />
              </div>
              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  {editingItem ? "Update" : "Create"} Portfolio Item
                </Button>
                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Order</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No portfolio items yet. Add your first item to get started.
                </TableCell>
              </TableRow>
            ) : (
              items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img
                      src={item.image_url}
                      alt={item.title || "Portfolio item"}
                      className="w-16 h-24 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {item.views}
                    </div>
                  </TableCell>
                  <TableCell>{item.display_order}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(item)}
                      >
                        <Pencil className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
